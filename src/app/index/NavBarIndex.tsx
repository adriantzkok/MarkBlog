interface IRoute {
  name: string;
  route: string;
}

export const routes: IRoute[] = [
  {
    name: "about",
    route: "/about",
  },
  {
    route: "/posts",
    name: "posts",
  },
];
