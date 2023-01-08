const textNodes = document.evaluate(
    "//text()[normalize-space()]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
for (let i = 0; i < textNodes.snapshotLength; i++) {
      const node = textNodes.snapshotItem(i);    
      if (node.parentNode.nodeName === "STYLE" || node.parentNode.nodeName === "style" || node.parentNode.nodeName === "SCRIPT" ){
        continue
      }
      node.nodeValue = node.nodeValue.replace(/Francia/g, 'Francia (2°)');
      node.nodeValue = node.nodeValue.replace(/segundo/g, 'segundo (Francia)');
      node.nodeValue = node.nodeValue.replace(/Segundo/g, 'Segundo (Francia)');
      node.nodeValue = node.nodeValue.replace(/2023/g, '202⭐⭐⭐');
    }

  
