export default async ($container) => {
    const $p = document.createElement('p');
    const { default: textProvider } = await import('./text-provider');
    $p.innerText = textProvider("Experience 1");
    $container.appendChild($p);
}