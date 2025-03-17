export default function  Page({ params }) {
    
    // fetch your blogpost by its slug
    let languages = ["python", "javascript", "java", "cpp", "cs"];
    if (languages.includes(params.slug))
    {
        return <div>My Post: {params.slug}</div>
    }
    else
    {
        throw new Error("error hai");
        // return <div>Post not found</div>
    }
    
}