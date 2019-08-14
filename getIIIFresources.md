---
layout: default
title: Where to find IIIF
nav_order: 8
---

<style>
  table {
    width: 100%;
  }
  table td {
    word-break: break-word;
  }
</style>


# {{page.title}}

* TOC
{:toc}

## Please feel free to contribute to this page by opening an [issue](https://github.com/dnoneill/annotate/issues/new?assignees=dnoneill&labels=&template=add-resource-to--where-to-find-iiif-.md&title=)

# Tools
* [https://github.com/2SC1815J/open-in-iiif-viewer](https://github.com/2SC1815J/open-in-iiif-viewer) is "a Firefox/Chrome extension to open IIIF manifest link in your favorite IIIF viewer".


# Internet Archive

Images in the Internet Archive accessible through a IIIF endpoint. Instructions are located here: [https://medium.com/@aeschylus/use-internet-archives-iiif-endpoint-to-unlock-your-images-potential-9b0a3efa5b55](https://medium.com/@aeschylus/use-internet-archives-iiif-endpoint-to-unlock-your-images-potential-9b0a3efa5b55)

# Wikipedia

See [{{site.url}}{{site.baseurl}}/wikipedia]({{site.baseurl}}/wikipedia) for Information.

# ContentDM images

Search any image in ContentDM. [https://researchworks.oclc.org/iiif-explorer/search?q=](https://researchworks.oclc.org/iiif-explorer/search?q=)

# Other repositories

{% assign insts = site.iiifproviders | sort: "institution" %}

| Institution | Interface | Types | Notes |
|---|---|---|---|{% for inst in insts %}
| {{inst.institution}} | {% for website in inst.website %}<a href="{{website}}" target="_blank">{{website}}</a><br> {% endfor %} | {{inst.subjects}}  | {{inst.notes}}|{% endfor %}
