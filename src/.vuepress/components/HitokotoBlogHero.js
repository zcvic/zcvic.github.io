import { defineComponent, h, nextTick, onMounted, onUnmounted, ref } from "vue";
import { DropTransition } from "@theme-hope/components/transitions/index";
import "vuepress-theme-hope/presets/hitokoto-blog-hero.scss";
export default defineComponent({
    name: "HitokotoBlogHero",
    inheritAttrs: false,
    props: {
        /** Hero text */
        text: {
            type: String,
            required: true,
        },
        /** Hero image */
        image: { type: String, default: null },
        /** Hero image dark */
        imageDark: { type: String, default: null },
        /** Hero image alt */
        alt: { type: String, required: true },
        /** Hero image style */
        imageStyle: {
            type: [String, Object],
            default: null,
        },
    },
    setup(props) {
        const text = ref("");
        const display = ref("");
        const author = ref("");
        let isMounted = false;
        const getHitokoto = () => fetch("https://v1.hitokoto.cn")
            .then((res) => res.json())
            .then(({ from, hitokoto }) => {
            text.value = hitokoto;
            author.value = from;
        });
        onMounted(async () => {
            isMounted = true;
            await getHitokoto();
            display.value = "";
            let index = 0;
            const renderNextWordOnce = async () => {
                if (index < text.value.length) {
                    display.value += text.value[index];
                    index++;
                    await nextTick()
                    await new Promise(resolve => setTimeout(resolve, 200))
                    void renderNextWordOnce()
                }
            }
            renderNextWordOnce()
        });
        onUnmounted(() => {
            isMounted = false;
        });
        return () => [
            h(DropTransition, { appear: true, type: "group", delay: 0.04 }, () => [
                props.image
                    ? h("img", {
                        key: "light",
                        class: ["vp-blog-hero-image", { light: props.imageDark }],
                        style: props.imageStyle,
                        src: props.image,
                        alt: props.alt,
                    })
                    : null,
                props.imageDark
                    ? h("img", {
                        key: "dark",
                        class: "vp-blog-hero-image dark",
                        style: props.imageStyle,
                        src: props.imageDark,
                        alt: props.alt,
                    })
                    : null,
            ]),
            h(DropTransition, { appear: true, delay: 0.08 }, () => props.text
                ? h("h1", { class: "vp-blog-hero-title" }, props.text)
                : null),
            h("div", { class: "hitokoto" }, [
                h("p", { class: "hitokoto-text" }, h("span", display.value)),
                h("p", {
                    class: "hitokoto-author",
                    style: { opacity: display.value.length > 4 ? 1 : 0 },
                }, `——「${author.value}」`),
            ]),
        ];
    },
});
