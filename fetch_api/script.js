async function getData()
{
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    return data;
}

async function main()
{
    // let data = await getData();
    let data = await postData();
    console.log(data);
    console.log("processing data");
}

async function postData() {
    // simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            // 'Content-type': 'application/x-www-form-urlencoded',
                },
        })
        let data = await x.json();
        // can also use x.text()
        return data;
}


main();