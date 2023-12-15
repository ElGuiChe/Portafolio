export default function SideBar() {

    return (
        <div>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="google.com">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        </div>
    )
}