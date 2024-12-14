module.exports = (text) => {
  const namesAndVersions = [];

  //Thanks GPT!
  const regex = /"name":\s*"([^"]+)",[\s\S]*?\+ {2}"version":\s*"([^"]+)"/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const name = match[1];
    const version = match[2];
    namesAndVersions.push({ name, version });
  }

  console.log('...::: Apps to deploy :::...');
  console.log(namesAndVersions);
  return JSON.stringify(namesAndVersions);
  // core.setOutput('apps', JSON.stringify(namesAndVersions));
};
