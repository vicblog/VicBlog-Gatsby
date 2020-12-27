import React from "react";
import NavItem from "@/components/Header/NavItem";
import { useArticleOfCurrentLang } from "@/stores/useArticleOfCurrentLang";

interface Props {
  Icon: React.ComponentType;
  articleId: string;
  onClick?(): void;
  wrapper: "navItem" | "dropdownItem";
  textId: string;
}

const ArticleNavItem: React.FC<Props> = ({ Icon, articleId, onClick, wrapper, textId }) => {

  const path = useArticleOfCurrentLang(articleId).path;

  return (
    <NavItem
      wrapper={wrapper}
      onClick={onClick}
      Icon={Icon}
      match={(pathname) => pathname.startsWith(path)}
      to={path}
      textId={textId}
    />
  );
}

export default ArticleNavItem;