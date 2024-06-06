export const UserCardComponent = (user) => {
    const {
        name: { firstname, lastname },
        username,
        email,
        password
    } = user;
    return ` 
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center p-5 mx-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">${firstname||"Unknown" } ${lastname || "User"} </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Username: ${username || "unknown_user"}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Email: ${email || "unknownuser123@gmail.com"}</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Password: ${password || "******"}</p>
    </div>`;
};