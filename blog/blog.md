---
layout: layout.html
---

<main>
<h1 id="archive">Archive</h1> 
        <ol class="postlist" style="--postlist-index: {{ collections.posts.length}}">
            {% for latest in collections.posts%}
                <li class="postlist-item">
                    <a class="postlist-link" href="{{ latest.url }}"> {{ latest.data.title }}</a>
                    <p class="postlist-description">{{ latest.data.description }}</p>
                </li>
            {% endfor %}
        </ol>
</main>