async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('455'))
        }, 3500);
    })
}

async function main() {
    console.log("KayVeeZ");
    let data = await getData();
    console.log('Kshitij');
}

main()