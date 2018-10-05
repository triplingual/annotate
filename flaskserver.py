from flask import Flask, jsonify
from flask import request, render_template
from flask_cors import CORS
import json, os

app = Flask(__name__)
CORS(app)

annotations = []
filepath = "_annotations"

@app.route('/annotations/', methods=['POST'])
def create_anno():
    annotation = json.loads(request.data)
    origin_url = request.headers.get('Referer').strip()
    id = annotation[0]['on'][0]['full'].split("/")[-1].replace("_", "-")
    formated_annotation = {"@context":"http://iiif.io/api/presentation/2/context.json",
    "@type": "sc:AnnotationList", "@id": "%s%s/%s-list.json"% (origin_url, filepath[1:], id) } 
    formated_annotation['resources'] = annotation
    
    print("{}.json".format(os.path.join(filepath, id)))
    with open("{}-list.json".format(os.path.join(filepath, id)), 'w') as outfile:
        outfile.write("---\nlayout: null\n---\n")
        outfile.write(json.dumps(formated_annotation))
    index = 1
    print(annotation)
    for anno in annotation:
        with open("{}-{}.json".format(os.path.join(filepath, id), index), 'w') as outfile:
            outfile.write("---\nlayout: null\n---\n")
            outfile.write(json.dumps(anno))
        index += 1
    return jsonify(annotation), 201
    
@app.route('/annotations/', methods=['DELETE'])
def delete_anno():
    print(request.data)
    delete_path = os.path.join(filepath, request.data) + ".json"
    os.remove(delete_path)
    return "File Removed", 201
    