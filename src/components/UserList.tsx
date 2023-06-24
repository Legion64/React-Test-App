import UserListItem, {User} from "./UserListItem.tsx";
import {Disclosure, Transition} from "@headlessui/react";

type ListProps = {
    items: Array<User>;
}

const UserList = (props: ListProps) => {
    return (
        <div className="mx-5 sm:mx-0 border overflow-hidden rounded-xl">
            {props.items.map((user, index) => (
                <Disclosure key={index}>
                    <Disclosure.Button as="div">
                        <UserListItem name={user.name} email={user.email} address={user.address} phone={user.phone}
                                      role_position={user.role_position} vote_counter={user.vote_counter}
                                      position={index + 1}/>
                        {(props.items.length !== index + 1) ? <hr/> : null}
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="p-2 bg-gray-50 shadow-inner">
                            <div>
                                <span className="font-bold">Phone: </span>
                                <span>{user.phone}</span>
                            </div>
                            <div>
                                <span className="font-bold">Address: </span>
                                <span>{user.address}</span>
                            </div>
                            <div>
                                <span className="font-bold">Email: </span>
                                <span>{user.email}</span>
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </Disclosure>
            ))}
        </div>
    );
};

export default UserList;