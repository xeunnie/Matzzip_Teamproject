import React from 'react';
import BottomMenu from "../../components/bottomMenu";

type LayoutProps = {
    children: JSX.Element;
  };

export default function Layout({children}:LayoutProps) {
    return(
        <div>
            {children}
            <BottomMenu/>
        </div>
    )
}