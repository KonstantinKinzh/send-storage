import SquarIcon from "@/shared/icons/arrange-panel-icons/squar.png";

import "./checkbox-choose.scss";

// appearance - none
// relative
// w - [22px]
// h - [22px]
// rounded - [4px]
// cursor - pointer

// after: content - ['']
// after: w - [22px]
// after: h - [22px]
// after: bg - transparent
// after: block
// after: absolute
// after: left - [0.3px]
// after: top - [0.3px]
// after: rounded - [4px]
// after: border - solid
// after: border - [#000]
// after: border - l - [1px]
// after: border - t - [1px]
// after: border - r - [1px]
// after: border - b - [1px]

// hover: bg - [#CBC6B9]
// [&:checked]: after: bg - [#DCD9D1]
// [&:checked]: after: bg - [url('@/resources/pages/check/check.png')]
// [&:checked]: after: bg - [length: 22px_22px]
// [&:checked]: after: bg - no - repeat
// [&:checked]: after: bg - center
// [&:checked]: after: border - none


export function CheckboxChoose() {
    return (
        <input
            className="checkbox-choose"
            type="checkbox" />
    );
};