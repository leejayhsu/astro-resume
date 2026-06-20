export function setupNav() {
  const navMenu = document.getElementById("nav-menu");
  if (!navMenu) return;

  const navButton = document.querySelector('[data-popovertarget="nav-menu"]');

  const mobileMenuQuery = window.matchMedia("(max-width: 991px)");

  const syncPopover = () => {
    if (mobileMenuQuery.matches) {
      navMenu.setAttribute("popover", "auto");
      navButton?.setAttribute("popovertarget", "nav-menu");
      return;
    }

    if (navMenu.matches(":popover-open")) {
      navMenu.hidePopover();
    }

    navMenu.removeAttribute("popover");
    navButton?.removeAttribute("popovertarget");
  };

  const closeOnNavigate = (event) => {
    const link = event.target.closest("a");
    if (link && navMenu.contains(link) && navMenu.matches(":popover-open")) {
      navMenu.hidePopover();
    }
  };

  syncPopover();
  navMenu.addEventListener("click", closeOnNavigate);
  mobileMenuQuery.addEventListener("change", syncPopover);

  return () => {
    navMenu.removeEventListener("click", closeOnNavigate);
    mobileMenuQuery.removeEventListener("change", syncPopover);
  };
}
