from flask import Flask, jsonify
from flask import request, render_template
from flask_cors import CORS
import json, os, glob

app = Flask(__name__)
CORS(app)

annotations = []
filepath = "_annotations"
    
@app.route('/annotations/', methods=['POST'])
def create_anno():
    data_object = json.loads(request.data)
    key = data_object['key']
    annotation = data_object['json']
    origin_url = request.headers.get('Referer').strip()
    id = key.split("/")[-1].replace("_", "-").lower()
    filecounter = [name for name in os.listdir(filepath) if id in name]
    if len(annotation) > 0:
        formated_annotation = {"@context":"http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:AnnotationList", "@id": "%s%s/%s-list.json"% (origin_url, filepath[1:], id) } 
        formated_annotation['resources'] = annotation
        file_path = os.path.join(filepath, id)
        list_name = "{}-list.json".format(file_path)
        if len(filecounter) - 1 > len(annotation):
            for file in filecounter:
                os.remove(os.path.join(filepath, file))
        with open(list_name, 'w') as outfile:
            outfile.write("---\nlayout: null\n---\n")
            outfile.write(json.dumps(formated_annotation))
        index = 1
        for anno in annotation:
            with open("{}-{}.json".format(file_path, index), 'w') as outfile:
                outfile.write("---\nlayout: null\n---\n")
                outfile.write(json.dumps(anno))
            index += 1
        return jsonify(annotation), 201
    else:
        for file in filecounter:
            os.remove(os.path.join(filepath, file))
        return jsonify("[]"), 201
    
@app.route('/annotations/', methods=['DELETE'])
def delete_anno():
    delete_path = os.path.join(filepath, request.data) + ".json"
    os.remove(delete_path)
    return "File Removed", 201


if __name__ == "__main__":
    app.run()