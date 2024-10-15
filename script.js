//your JS code here. If required.
function manipulateData() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });

    promise
		.then((numbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = numbers.filter((num) => num % 2 === 0);
                    document.getElementById('output').innerText = evenNumbers.join(', ');
                    resolve(evenNumbers);
                }, 1000);
            });
        })
        .then((evenNumbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const doubledNumbers = evenNumbers.map((num) => num * 2);
                    document.getElementById('output').innerText = doubledNumbers.join(', ');
                    resolve(doubledNumbers);
                }, 2000);
            });
        })
        .catch((err) => console.error('Error:', err));  
}

manipulateData();
