export function decreasingBlur(state, object) {
  if (state == 0) {
    object.style.WebkitFilter = "blur(6px)";
    object.style.Filter = "blur(5px)";
  }
  if (state == 1) {
    object.style.WebkitFilter = "blur(5px)";
    object.style.Filter = "blur(4px)";
  }
  if (state == 1) {
    object.style.WebkitFilter = "blur(4px)";
    object.style.Filter = "blur(3px)";
  }
  if (state == 2) {
    object.style.WebkitFilter = "blur(3px)";
    object.style.Filter = "blur(2px)";
  }
  if (state == 3) {
    object.style.WebkitFilter = "blur(2px)";
    object.style.Filter = "blur(1px)";
  }
  if (state == 4) {
    object.style.WebkitFilter = "blur(0px)";
    object.style.Filter = "blur(0px)";
  }
}