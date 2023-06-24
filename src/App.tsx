import NavBar from "./components/NavBar.tsx";
import UserList from "./components/UserList.tsx";
import {User} from "./components/UserListItem.tsx";

function App() {
    const users: Array<User> = [
        {
            name: "Melih Budak",
            email: "melihbudak@gmail.com",
            address: "Aydınlıkevler Mh. 6790 Sk. No:22 D:4 Çiğli/İzmir",
            phone: "+905056660303",
            role_position: "Software Developer",
            vote_counter: 0
        },
        {
            name: "Can Bulgay",
            email: "can.bulgay@siliconmade.com",
            address: "Aydınlıkevler Mh. 6790 Sk. No:22 D:4 Çiğli/İzmir",
            phone: "+905312665079",
            role_position: "Software Developer",
            vote_counter: 0
        }
    ]

    return (
        <>
            <NavBar></NavBar>

            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <UserList items={users}/>
                    <span className="text-sm text-gray-400 mt-3 inline-block">* You can click the row to see personal information</span>
                </div>
            </main>
        </>
    )
}

export default App
