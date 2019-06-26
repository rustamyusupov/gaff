import yaml from 'js-yaml';
import ini from 'ini';

const mapping = {
  json: JSON.parse,
  yaml: yaml.safeLoad,
  ini: ini.parse,
};

export default (ext, data) => mapping[ext](data);
