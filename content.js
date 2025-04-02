function searchAndMoveController(attempts = 0, maxAttempts = 50) {
  function deepSearch(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    let node = walker.nextNode();
    while (node) {
      if (node.id === 'controller') {
        node.style.top = '-15px';
        node.style.left = '-10px';
        return true;
      }
      if (node.shadowRoot) {
        if (deepSearch(node.shadowRoot)) return true;
      }
      node = walker.nextNode();
    }
    return false;
  }

  // Bắt đầu từ document.body
  if (!deepSearch(document.body)) {
    if (attempts < maxAttempts) {
      setTimeout(() => searchAndMoveController(attempts + 1, maxAttempts), 100); // Thử lại sau 100ms
    } else {
      // Dừng sau 50 lần
    }
  }
}

// Chạy ngay lập tức với 0 lần thử
searchAndMoveController();