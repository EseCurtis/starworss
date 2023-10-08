function URLtoID(url: string , reverse: boolean = false): string {
    if (!reverse) {
      // Encoding: Replace the first occurrence of "http://" or "https://" with "@@-@@"
      // and replace slashes with "@@-slash-@@"
      const encodedUrl = url.replace(/^(https?:\/\/)/, '@@-@@').replace(/\//g, '@@-slash-@@');
      return encodedUrl;
    } else {
      // Decoding: Replace "@@-@@" with the original protocol ("http://" or "https://")
      // and replace "@@-slash-@@" with slashes
      const decodedUrl = url.replace('@@-@@', (match) => {
        if (match === '@@-@@') {
          return 'https://'; // Default to "https://" if not found
        }
        return match; // Preserve the original protocol
      }).replace(/@@-slash-@@/g, '/');
      return decodedUrl;
    }
  }

export default URLtoID
  