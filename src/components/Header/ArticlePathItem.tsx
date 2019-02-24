import React from "react";
import { useStore } from "simstate";
import { LocationStore } from "@/stores/LocationStore";
import { ArticleStore } from "@/stores/ArticleStore";
import { I18nStore } from "@/stores/I18nStore";
import { Link } from "gatsby";
import NavLink from "@/components/Header/NavLink";

function doNothing() {

}

const ArticlePathItem = (props: {
  Outer: React.ComponentType<{ active: boolean }>,
  children?: React.ReactNode,
  id: string,
  onClick?(): void,
}) => {

  const { Outer, children, id, onClick } = props;

  const articleStore = useStore(ArticleStore);
  const i18nStore = useStore(I18nStore);
  const locationStore = useStore(LocationStore);

  const { pathname } = locationStore;

  const { language } = i18nStore;

  const node = articleStore.getNodeFromLang(id, language);

  const targetPageUrlParts = node.path.split("/");
  targetPageUrlParts.pop();

  const active = pathname.startsWith(targetPageUrlParts.join("/"));

  return (
    <Outer active={active}>
      <NavLink to={node.path} onClick={onClick || doNothing}>
        {children}
      </NavLink>
    </Outer>
  );

};

export default ArticlePathItem;
