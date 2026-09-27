import Link from "next/link";
export default function Sidebar(){
 const items=[["Dashboard","/dashboard"],["My Servers","/servers"],["Server Splitter","/splitter"],["Plugins","/plugins"],["Mods","/mods"],["Backups","/backups"],["Billing","/billing"],["Redeem Code","/redeem"],["Admin","/admin"]];
 return <aside className="side">{items.map(([n,u])=><Link className="nav" key={u} href={u}>{n}</Link>)}</aside>
}