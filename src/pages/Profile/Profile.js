import React, { useEffect, useState } from "react";
import { getAllByIdUser } from "../../api/api";
import ProfileViewFrom from '../../components/ProfileViewFrom'


export default function Profile(props) {

    const [user, setUser] = useState([]);

    useEffect(() => {
      const fetchApi = async () => {
        let result = await getAllByIdUser(props.match.params.id);
        setUser(result.data);
        console.log(result)
      };
      fetchApi();
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            <ProfileViewFrom user={user} ></ProfileViewFrom>
            <hr />
        </div>
    );
}
