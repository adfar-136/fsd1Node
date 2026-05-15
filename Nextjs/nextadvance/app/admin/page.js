import { getMessages } from "../actions/conAction";


export default async function adminPage(){
    const messages =await getMessages()

    return (
        <div>
            <h1> Message : </h1>
            <ul>
                {(await messages).map(msg =>(
                    <li>
                        <b>{msg.name}</b> -  {msg.email}
                        <p>{msg.message}</p>
                    </li>

                ))}
            </ul>
        </div>
    )
}