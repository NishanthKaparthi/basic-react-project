export default function TabButton({ isSelected, children, ...props }) {
    console.log('In Tab Component');
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
        </li>
    )
}