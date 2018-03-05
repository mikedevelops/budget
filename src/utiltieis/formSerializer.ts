export interface ISerializedForm {
    [index: string]: any;
}

export function serialize (
    data: FormData
): ISerializedForm {
    const formData: ISerializedForm = {};

    for (const tuple of data.entries()) {
        formData[tuple[0]] = tuple[1];
    }

    return formData;
}
