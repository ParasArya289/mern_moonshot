import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ecommerceContext = createContext();
const interests = [
  { name: "sports", isChecked: false },
  { name: "reading", isChecked: false },
  { name: "cooking", isChecked: false },
  { name: "gardening", isChecked: false },
  { name: "painting", isChecked: false },
  { name: "photography", isChecked: false },
  { name: "traveling", isChecked: false },
  { name: "music", isChecked: false },
  { name: "videogames", isChecked: false },
  { name: "hiking", isChecked: false },
  { name: "dancing", isChecked: false },
  { name: "writing", isChecked: false },
  { name: "yoga", isChecked: false },
  { name: "drawing", isChecked: false },
  { name: "meditation", isChecked: false },
  { name: "fishing", isChecked: false },
  { name: "biking", isChecked: false },
  { name: "climbing", isChecked: false },
  { name: "knitting", isChecked: false },
  { name: "surfing", isChecked: false },
  { name: "skiing", isChecked: false },
  { name: "camping", isChecked: false },
  { name: "singing", isChecked: false },
  { name: "bird watching", isChecked: false },
  { name: "sculpting", isChecked: false },
  { name: "running", isChecked: false },
  { name: "playing musical instruments", isChecked: false },
  { name: "skydiving", isChecked: false },
  { name: "sailing", isChecked: false },
  { name: "kayaking", isChecked: false },
  { name: "rafting", isChecked: false },
  { name: "skateboarding", isChecked: false },
  { name: "surfing", isChecked: false },
  { name: "basketball", isChecked: false },
  { name: "football", isChecked: false },
  { name: "baseball", isChecked: false },
  { name: "soccer", isChecked: false },
  { name: "tennis", isChecked: false },
  { name: "playing board games", isChecked: false },
  { name: "volleyball", isChecked: false },
  { name: "swimming", isChecked: false },
  { name: "boxing", isChecked: false },
  { name: "martial arts", isChecked: false },
  { name: "golf", isChecked: false },
  { name: "bowling", isChecked: false },
  { name: "billiards", isChecked: false },
  { name: "sketching", isChecked: false },
  { name: "scuba diving", isChecked: false },
  { name: "bungee jumping", isChecked: false },
  { name: "paragliding", isChecked: false },
  { name: "horseriding", isChecked: false },
  { name: "snorkeling", isChecked: false },
  { name: "rock climbing", isChecked: false },
  { name: "archery", isChecked: false },
  { name: "bowling", isChecked: false },
  { name: "ice skating", isChecked: false },
  { name: "snowboarding", isChecked: false },
  { name: "karaoke", isChecked: false },
  { name: "jogging", isChecked: false },
  { name: "jump rope", isChecked: false },
  { name: "puzzle solving", isChecked: false },
  { name: "calligraphy", isChecked: false },
  { name: "magic tricks", isChecked: false },
  { name: "sculpture", isChecked: false },
  { name: "gardening", isChecked: false },
  { name: "learning languages", isChecked: false },
  { name: "knitting", isChecked: false },
  { name: "sewing", isChecked: false },
  { name: "woodworking", isChecked: false },
  { name: "pottery", isChecked: false },
  { name: "astrology", isChecked: false },
  { name: "coin collecting", isChecked: false },
  { name: "stamp collecting", isChecked: false },
  { name: "hiking", isChecked: false },
  { name: "geocaching", isChecked: false },
  { name: "genealogy", isChecked: false },
  { name: "fossil hunting", isChecked: false },
  { name: "reading", isChecked: false },
  { name: "writing", isChecked: false },
  { name: "playing chess", isChecked: false },
  { name: "playing cards", isChecked: false },
  { name: "watching movies", isChecked: false },
  { name: "listening to podcasts", isChecked: false },
  { name: "collecting vinyl records", isChecked: false },
  { name: "birdwatching", isChecked: false },
  { name: "stargazing", isChecked: false },
  { name: "photography", isChecked: false },
  { name: "doodling", isChecked: false },
  { name: "programming", isChecked: false },
  { name: "gaming", isChecked: false },
  { name: "cycling", isChecked: false },
  { name: "ice hockey", isChecked: false },
  { name: "snooker", isChecked: false },
  { name: "roller skating", isChecked: false },
  { name: "surfing", isChecked: false },
  { name: "handicrafts", isChecked: false },
  { name: "astronomy", isChecked: false },
  { name: "writing poetry", isChecked: false },
  { name: "acting", isChecked: false },
  { name: "learning magic", isChecked: false },
];

export const EcommmerceContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("usersData"))
  );

  const navigate = useNavigate();

 
  const createUser = (data) => {
    const newData = { ...data, interests: interests };
    localStorage.setItem("user", JSON.stringify(newData));

    setUser(() => newData);

    setUserData((users) => {
      if (users) {
        const updatedUsers = [...users, newData];
        localStorage.setItem("usersData", JSON.stringify(updatedUsers));
        return updatedUsers;
      } else {
        const initialUsers = [newData];
        localStorage.setItem("usersData", JSON.stringify(initialUsers));
        return initialUsers;
      }
    });
  };

  const login = (data) => {
    const foundUser = userData.find((user) => data.email === user.email);
    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUser(() => foundUser);
      navigate("/");
    } else {
      alert("Wrong credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(() => {});
  };

  const updateInterests = (name) => {
    const modifiedUser = { ...user };
    modifiedUser.interests = modifiedUser.interests.map((int) =>
      int.name === name ? { ...int, isChecked: !int.isChecked } : int
    );
    setUser(() => modifiedUser);
    const newUserData = userData.map((u) =>
      u.email === user.email ? modifiedUser : u
    );
    setUserData((users) => newUserData);
    localStorage.setItem("user", JSON.stringify(modifiedUser));
    localStorage.setItem("usersData", JSON.stringify(newUserData));
  };

  return (
    <ecommerceContext.Provider
      value={{ user, setUser, createUser, login, logout, updateInterests }}
    >
      {children}
    </ecommerceContext.Provider>
  );
};

export const useEcommerceData = () => useContext(ecommerceContext);
