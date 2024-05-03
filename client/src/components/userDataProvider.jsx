export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        isLoggedIn: false,
        gender: null,
        weight: null,
        height: null,
        fitnessGoals: null,
    });

    const updateUser = data => {
        setUserData(prev => ({ ...prev, ...data }));
    };

    return (
        <UserDataContext.Provider value={{ userData, updateUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

// Define PropTypes
UserDataProvider.propTypes = {
    children: PropTypes.node.isRequired
};