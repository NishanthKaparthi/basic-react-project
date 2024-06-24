export default function Section({ title, children, ...props }) { //here ...props is a REST operator, where it collects all the individual elements in single array or object ()...props)
    return (
        //here ...props is a spread operator, where it spread the elements as individual elements
        <section {...props}> 
            <h2>{title}</h2>
            {children}
        </section>
    );
}