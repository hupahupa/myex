var feedGenerator = {
  news_url : 'http://www.pcworld.com/index.rss',

  updateFeed: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.news_url, true);
    req.onload = this.showFeeds.bind(this);
    req.send(null);
  },

  showFeeds: function (e) {
    var feeds = e.target.responseXML.getElementsByTagName("channel").item(0);
    var entriesLength = feeds.getElementsByTagName("item").length;
      
  
    var ul_tag = document.createElement('ul');
    
    for (var i = 0; i < entriesLength; i++) {
      var entry = feeds.getElementsByTagName('item').item(i);
      var title = entry.getElementsByTagName('title').item(0).firstChild.data;
      var link = entry.getElementsByTagName('link').item(0).firstChild.data;

      var li_tag = document.createElement('li');
      if(i % 2) {
        li_tag.setAttribute('class', 'odd');
      }else{
        li_tag.setAttribute('class','even');
      }

      var anchor = document.createElement('a');

      anchor.setAttribute('href', link);
      anchor.setAttribute('alt', title);
      anchor.setAttribute('target', '_blank');
      anchor.innerHTML = title;
            
      li_tag.appendChild(anchor);
      ul_tag.appendChild(li_tag);
    }
    
    document.body.appendChild(ul_tag);
  },
};


document.addEventListener('DOMContentLoaded', function () {
  feedGenerator.updateFeed();
});