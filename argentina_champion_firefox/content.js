const textNodes = document.evaluate(
    "//text()[normalize-space()]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
for (let i = 0; i < textNodes.snapshotLength; i++) {
      const node = textNodes.snapshotItem(i);    
      if (node.parentNode.nodeName === "STYLE" || node.parentNode.nodeName === "SCRIPT" || node.parentNode.nodeName === "style"){
        continue
      }
      node.nodeValue = node.nodeValue.replace(/segundo/g, 'segundo, Francia');
      node.nodeValue = node.nodeValue.replace(/tres/g, '⭐⭐⭐');
      node.nodeValue = node.nodeValue.replace(/3/g, '⭐⭐⭐');
    }

  

    