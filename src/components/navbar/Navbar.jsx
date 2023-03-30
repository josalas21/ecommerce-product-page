import { CartIcon, Logo, MenuIcon } from "../../assets";

function Navbar() {
  return (
    <navbar class="mx-auto flex w-11/12 items-center justify-between gap-4 px-4 py-2 md:border-b-2 md:py-6">
      <div class="flex h-8 w-32 items-center gap-2 md:h-10">
        <MenuIcon />
        <Logo />
      </div>
      <div class="flex h-8 w-12 items-center justify-end ">
        <CartIcon />
      </div>
    </navbar>
  );
}

export default Navbar;
