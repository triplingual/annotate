---
layout: default
title: Where to find IIIF
nav_order: 7
---
**Please feel free to contribute to this page!**

# Internet Archive

Images in the Internet Archive accessible through a IIIF endpoint. Instructions are located here: [https://medium.com/@aeschylus/use-internet-archives-iiif-endpoint-to-unlock-your-images-potential-9b0a3efa5b55](https://medium.com/@aeschylus/use-internet-archives-iiif-endpoint-to-unlock-your-images-potential-9b0a3efa5b55)

# Wikipedia

See [{{site.baseurl}}/wikipedia]({{site.baseurl}}/wikipedia) for Information.

# ContentDM images

Search any image in ContentDM. https://researchworks.oclc.org/iiif-explorer/search?q=

# Other repositories

{% assign insts = site.iiifproviders | sort: "institution" %}

| Institution | Interface | Subjects |
|---|---|---|{% for inst in insts %}
| {{inst.institution}} | {% for website in inst.website %}<a href="{{website}}" target="_blank">{{website}}</a><br> {% endfor %} | {{inst.subjects}}  |{% endfor %}
