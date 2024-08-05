/**
 * Could be upgraded to handle images
 */
const Avatar = () => {
  return (
    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ring-1">
       <img src="/src/assets/me.png" alt="me" width={50} />
    </div>
  );
};

export default Avatar;
