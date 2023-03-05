function FloatingButton({onClick, children}) {
  return (
    <button className="floatingButton" onClick={onClick}>
      {children}
    </button>
  );
}

export default FloatingButton;
