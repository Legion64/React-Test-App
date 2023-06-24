import Button from "./statics/Button.tsx";
import {ChevronUpIcon} from "@heroicons/react/24/outline";
import {Dialog} from "@headlessui/react";
import {useState} from "react";
import classNames from "classnames";

export type User = {
    name: string;
    email: string;
    address: string;
    phone: string;
    role_position: string;
    vote_counter: number;
    position?: number;
}

function UserListItem(props: User) {
    const [voteModal, setVoteModal] = useState(false);

    const handleClick = (ev: any) => {
        ev.preventDefault()

        setVoteModal(true)
    }

    const denyModal = () => {
        setVoteModal(false)
    }

    const acceptModal = () => {
        // Do whatever you want to do
    }

    return (
        <div className="flex items-center justify-between select-none py-2 px-4">
            <div className="flex items-center">
                <span className={classNames(
                    'text-xl',
                    props.position === 1 ? 'font-bold text-yellow-600' : 'text-gray-800'
                )}>
                    #{props.position}
                </span>
                <div className="sm:ml-4">
                    <span className="font-bold">{props.name}</span>
                    <span className="block text-xs text-gray-400">{props.role_position}</span>
                </div>
            </div>
            <div className="flex items-center gap-x-3">
                <Button onClick={handleClick} append={<ChevronUpIcon style={{marginTop: 1}} />}>
                    Vote
                </Button>
            </div>

            <Dialog open={voteModal} onClose={() => setVoteModal(false)}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="shadow p-5 w-full max-w-xl rounded bg-white">
                        <Dialog.Title className="text-2xl text-center mb-5">Are you sure?</Dialog.Title>
                        <Dialog.Description className="text-center">If you accept this method, you will be voting for the selected user!</Dialog.Description>

                        <div className="flex gap-x-2 justify-end mt-5">
                            <Button onClick={denyModal} className="bg-red-500 border-0 text-white shadow hover:bg-red-700">
                                Deny
                            </Button>
                            <Button onClick={acceptModal} className="bg-indigo-500 border-0 text-white drop-shadow-2xl hover:bg-indigo-600">
                                Accept
                            </Button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}

export default UserListItem;