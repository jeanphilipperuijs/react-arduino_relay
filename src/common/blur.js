export default function decreasingBlur(state, elm) {
	switch(state){
		case(0):
			elm.style.WebkitFilter = "blur(7px)";
			elm.style.Filter = "blur(7px)";
			break;
		case(1):
			elm.style.WebkitFilter = "blur(6px)";
			elm.style.Filter = "blur(6px)";
			break;
		case(2):
			elm.style.WebkitFilter = "blur(5px)";
			elm.style.Filter = "blur(5px)";
			break;
		case(3):
			elm.style.WebkitFilter = "blur(4px)";
			elm.style.Filter = "blur(4px)";
			break;
		case(4):
			elm.style.WebkitFilter = "blur(0px)";
			elm.style.Filter = "blur(0px)";
			break;
		}
	
}