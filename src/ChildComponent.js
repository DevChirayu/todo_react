import React, { useState, useEffect } from "react";

function ChildComponent(props) {
    const [selectedCountry, setSelectedCountry] = useState('IN');


    // Update favicon dynamically based on selected country
    useEffect(() => {
        const updateFavicon = () => {
            const faviconLink = document.querySelector("link[rel~='icon',]");
            if (faviconLink !== null) {
                // Set favicon based on selected country
                let faviconPath;
                switch (selectedCountry) {
                    case 'GR':
                        faviconPath = "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath fill='%23FFCD05' d='M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4H0v4z'/%3E%3Cpath fill='%23ED1F24' d='M0 14h36v9H0z'/%3E%3Cpath fill='%23141414' d='M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4z'/%3E%3C/svg%3E";
                        break;
                    case 'IN':
                        faviconPath = '%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" xml:space="preserve"%3E%3Cpath fill="%23138808" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0v5z"%3E%3C/path%3E%3Cpath fill="%23F93" d="M36 14V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v5h36z"%3E%3C/path%3E%3Cpath fill="%23F7F7F7" d="M0 13.667h36v8.667H0z"%3E%3C/path%3E%3Ccircle fill="navy" cx="18" cy="18" r="4"%3E%3C/circle%3E%3Ccircle fill="%23F7F7F7" cx="18" cy="18" r="3.375"%3E%3C/circle%3E%3Cpath d="m18.1 16.75-.1.65-.1-.65.1-1.95zm-.928-1.841.408 1.909.265.602-.072-.653zm-.772.32.888 1.738.412.513-.238-.613zm-.663.508 1.308 1.45.531.389-.389-.531zm-.508.663 1.638 1.062.613.238-.513-.412zm-.32.772 1.858.601.653.072-.602-.265zM14.8 18l1.95.1.65-.1-.65-.1zm.109.828 1.909-.408.602-.265-.653.072zm.32.772 1.738-.888.513-.412-.613.238zm.508.663 1.45-1.308.389-.531-.531.389zm.663.508 1.062-1.638.238-.613-.412.513zm.772.32.601-1.858.072-.653-.265.602zM18 21.2l.1-1.95-.1-.65-.1.65zm.828-.109-.408-1.909-.265-.602.072.653zm.772-.32-.888-1.738-.412-.513.238.613zm.663-.508-1.308-1.45-.531-.389.389.531zm.508-.663-1.638-1.062-.613-.238.513.412zm.32-.772-1.858-.601-.653-.072.602.265zM21.2 18l-1.95-.1-.65.1.65.1zm-.109-.828-1.909.408-.602.265.653-.072zm-.32-.772-1.738.888-.513.412.613-.238zm-.508-.663-1.45 1.308-.389.531.531-.389zm-.663-.508-1.062 1.638-.238.613.412-.513zm-.772-.32-.601 1.858-.072.653.265-.602z"%3E%3C/path%3E%3Cg fill="navy"%3E%3Ccircle cx="17.56" cy="14.659" r=".2"%3E%3C/circle%3E%3Ccircle cx="16.71" cy="14.887" r=".2"%3E%3C/circle%3E%3Ccircle cx="15.948" cy="15.326" r=".2"%3E%3C/circle%3E%3Ccircle cx="15.326" cy="15.948" r=".2"%3E%3C/circle%3E%3Ccircle cx="14.887" cy="16.71" r=".2"%3E%3C/circle%3E%3Ccircle cx="14.659" cy="17.56" r=".2"%3E%3C/circle%3E%3Ccircle cx="14.659" cy="18.44" r=".2"%3E%3C/circle%3E%3Ccircle cx="14.887" cy="19.29" r=".2"%3E%3C/circle%3E%3Ccircle cx="15.326" cy="20.052" r=".2"%3E%3C/circle%3E%3Ccircle cx="15.948" cy="20.674" r=".2"%3E%3C/circle%3E%3Ccircle cx="16.71" cy="21.113" r=".2"%3E%3C/circle%3E%3Ccircle cx="17.56" cy="21.341" r=".2"%3E%3C/circle%3E%3Ccircle cx="18.44" cy="21.341" r=".2"%3E%3C/circle%3E%3Ccircle cx="19.29" cy="21.113" r=".2"%3E%3C/circle%3E%3Ccircle cx="20.052" cy="20.674" r=".2"%3E%3C/circle%3E%3Ccircle cx="20.674" cy="20.052" r=".2"%3E%3C/circle%3E%3Ccircle cx="21.113" cy="19.29" r=".2"%3E%3C/circle%3E%3Ccircle cx="21.341" cy="18.44" r=".2"%3E%3C/circle%3E%3Ccircle cx="21.341" cy="17.56" r=".2"%3E%3C/circle%3E%3Ccircle cx="21.113" cy="16.71" r=".2"%3E%3C/circle%3E%3Ccircle cx="20.674" cy="15.948" r=".2"%3E%3C/circle%3E%3Ccircle cx="20.052" cy="15.326" r=".2"%3E%3C/circle%3E%3Ccircle cx="19.29" cy="14.887" r=".2"%3E%3C/circle%3E%3Ccircle cx="18.44" cy="14.659" r=".2"%3E%3C/circle%3E%3Ccircle cx="18" cy="18" r=".9"%3E%3C/circle%3E%3C/g%3E%3C/svg%3E';
                        break;
                    case 'US':
                        faviconPath = "%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2036%2036%22%3E%3Cpath%20fill%3D%22%23B22334%22%20d%3D%22M35.445%207C34.752%205.809%2033.477%205%2032%205H18v2h17.445zM0%2025h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0%2021h36v2H0zm4%2010h28c1.477%200%202.752-.809%203.445-2H.555c.693%201.191%201.968%202%203.445%202zM18%209h18v2H18z%22%2F%3E%3Cpath%20fill%3D%22%23EEE%22%20d%3D%22M.068%2027.679c.017.093.036.186.059.277.026.101.058.198.092.296.089.259.197.509.333.743L.555%2029h34.89l.002-.004c.135-.233.243-.483.332-.741.034-.099.067-.198.093-.301.023-.09.042-.182.059-.275.041-.22.069-.446.069-.679H0c0%20.233.028.458.068.679zM0%2023h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM0%209c0-.233.03-.457.068-.679C.028%208.542%200%208.767%200%209zm.555-2l-.003.005L.555%207zM.128%208.044c.025-.102.06-.199.092-.297-.034.098-.066.196-.092.297zM18%209h18c0-.233-.028-.459-.069-.68-.017-.092-.035-.184-.059-.274-.027-.103-.059-.203-.094-.302-.089-.258-.197-.507-.332-.74.001-.001%200-.003-.001-.004H18v2z%22%2F%3E%3Cpath%20fill%3D%22%233C3B6E%22%20d%3D%22M18%205H4C1.791%205%200%206.791%200%209v10h18V5z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M2.001%207.726l.618.449-.236.725L3%208.452l.618.448-.236-.725L4%207.726h-.764L3%207l-.235.726zm2%202l.618.449-.236.725.617-.448.618.448-.236-.725L6%209.726h-.764L5%209l-.235.726zm4%200l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L9%209l-.235.726zm4%200l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L13%209l-.235.726zm-8%204l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L5%2013l-.235.726zm4%200l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L9%2013l-.235.726zm4%200l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L13%2013l-.235.726zm-6-6l.618.449-.236.725L7%208.452l.618.448-.236-.725L8%207.726h-.764L7%207l-.235.726zm4%200l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L11%207l-.235.726zm4%200l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L15%207l-.235.726zm-12%204l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L3%2011l-.235.726zM6.383%2012.9L7%2012.452l.618.448-.236-.725.618-.449h-.764L7%2011l-.235.726h-.764l.618.449zm3.618-1.174l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L11%2011l-.235.726zm4%200l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L15%2011l-.235.726zm-12%204l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L3%2015l-.235.726zM6.383%2016.9L7%2016.452l.618.448-.236-.725.618-.449h-.764L7%2015l-.235.726h-.764l.618.449zm3.618-1.174l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L11%2015l-.235.726zm4%200l.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L15%2015l-.235.726z%22%2F%3E%3C%2Fsvg%3E";
                        break;
                    default:
                        faviconPath = ''; // Default favicon path
                }
                faviconLink.setAttribute('href', `data:image/svg+xml,${faviconPath}`);
            }
        };

        // Set title based on selected country name
        const selectedOption = document.querySelector(`option[value='${selectedCountry}']`);
        if (selectedOption !== null) {
            document.title = `${selectedOption.textContent.toUpperCase()}`;
        }
        updateFavicon();
    }, [selectedCountry]);

    // Function to handle dropdown selection
    const handleSelectChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div>
            <h3>Child Component</h3>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <div>
                <h1>Select Country</h1>
                <select value={selectedCountry} onChange={handleSelectChange}>
                    <option value="GR">Germany</option>
                    <option value="IN">India</option>
                    <option value="US">United State</option>
                </select>
                <p>You selected: {selectedCountry.toUpperCase}</p>
            </div>
        </div>
    );
}

export default ChildComponent;
