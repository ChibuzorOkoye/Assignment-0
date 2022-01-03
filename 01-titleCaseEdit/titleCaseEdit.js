function titleCaseEdit(title) {
  // Insert code here;

  title = title.toLowerCase();
  const tN = new String(title);

  const spacedwords = tN.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  // for (let i = 0; i < spacedwords.length; i++) 
  // {
  //   spacedwords[i] = spacedwords[i][0].toUpperCase() + spacedwords[i].substring(1);
  // }

  // spacedwords.join(" ");

  //tN = spacedwords;

  return spacedwords;
}

// Do not edit this line;
module.exports = titleCaseEdit;