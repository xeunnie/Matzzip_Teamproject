import BottomMenu from "../../components/bottomMenu";
import HeaderMenu from "../../components/headerMenu";
type LayoutProps = {
    children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
    return(
        <div>
            <HeaderMenu name="마이페이지" />
            { children }
            <BottomMenu/>
        </div>
    )
}