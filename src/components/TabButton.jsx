export default function TabButton(props) {
    console.log('In Tab Component');
    return (
        <li><button className={props.isSelected ? 'active': ''} onClick={props.onSelect}>{props.children}</button></li>
    )
}