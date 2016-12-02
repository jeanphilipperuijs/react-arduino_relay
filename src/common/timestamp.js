export default function timestamp(){
	let rt = new Date().toISOString();
	return rt.slice( 0, 10 )+ " "+ rt.slice( 11, 19 );
}