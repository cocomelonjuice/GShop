import useLogout from "./useLogout";

function LogOut() {
  const { logout, isLoading } = useLogout();
  return (
    <button disabled={isLoading} onClick={logout}>
      LOG OUT
    </button>
  );
}

export default LogOut;
