export default function getInput(nameName, exception) {
  return nameName.length === 0 ? exception : nameName;
}
