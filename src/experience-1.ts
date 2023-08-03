export default async ($container) => {
    const $p = document.createElement('p');

    // This does a dynamic import of the text-provider module and the experience-2 module _at the same time_.
    const [{ default: dep1 }, { default: dep2 }] = await Promise.all([import('./dependency-1'), import('./dependency-2')]);

    $container.appendChild($p);
    dep1();
    dep2();
}