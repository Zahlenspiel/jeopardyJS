const fetchedData = fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        return data;
    });

const data = async () => {
    const a = await fetchedData;
    console.log(a);
}