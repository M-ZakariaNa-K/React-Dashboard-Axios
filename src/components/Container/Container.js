import "./Container.css"
const Container = (props) => {
  return (
	<div className="content">
{props.children}		
	</div>
  );
}
export default Container