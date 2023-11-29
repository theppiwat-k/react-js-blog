import React, {useState} from "react";
import {Input} from "../../../../components/forms/Input";
import {TextArea} from "../../../../components/forms/TextArea";
import {FormProvider, useForm} from "react-hook-form";
import {Select} from "../../../../components/forms/Select";
import {Radio} from "../../../../components/forms/Radio";
import {TextRich} from "../../../../components/forms/TextRich";
enum Status {
  active = "active",
  inactive = "nactive",
}

interface IBlockCreate {
  title: string;
  slug: string;
  summary: string;
  metatitle: string;
  metakeyword: string;
  metadescription: string;
  author: string;
  status: Status;
  publised_at: string;
  featured: string;
  remove: string;
  content: string;
}

export function BlockCreate() {
  const methods = useForm<IBlockCreate>({});
  const [currentTab, setCurrentTab] = useState<string>("2");
  const activeTab = `bg-gray-100 p-3 text-blue-600 cursor-pointer`;
  const cssTab = `border-b px-3 py-1 cursor-pointer hover:text-blue-600 hover:bg-gray-100`;

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
  };

  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
    methods.reset({
      title: "",
      slug: "",
      summary: "",
      metatitle: "",
      metakeyword: "",
      metadescription: "",
      author: "",
      status: Status.active,
      publised_at: "",
      featured: "yes",
      remove: "yes",
      content: "",
    });
  });

  const statusRadio = [
    {
      id: "active",
      label: "Active",
      value: "active",
    },
    {
      id: "inactive",
      label: "Inactive",
      value: "inactive",
    },
  ];

  const featuredRadio = [
    {
      id: "featured_yes",
      label: "Yes",
      value: "yes",
    },
    {
      id: "featured_no",
      label: "No",
      value: "no",
    },
  ];

  const removeRadio = [
    {
      id: "remove_yes",
      label: "Yes",
      value: "yes",
    },
    {
      id: "remove_no",
      label: "No",
      value: "no",
    },
  ];

  return (
    <div className="bg-white p-10 shadow-md">
      <ul className="flex flex-wrap">
        <li
          className={`${cssTab} ${currentTab === "1" ? `${activeTab}` : ``}`}
          onClick={() => handleTabClick("1")}>
          Overview
        </li>
        <li
          className={`${cssTab} ${currentTab === "2" ? `${activeTab}` : ``}`}
          onClick={() => handleTabClick("2")}>
          Content
        </li>
        <li
          className={`${cssTab} ${currentTab === "3" ? `${activeTab}` : ``}`}
          onClick={() => handleTabClick("3")}>
          Relate Content
        </li>
        <li
          className={`${cssTab} ${currentTab === "4" ? `${activeTab}` : ``}`}
          onClick={() => handleTabClick("4")}>
          Classification
        </li>
        <li
          className={`${cssTab} ${currentTab === "5" ? `${activeTab}` : ``}`}
          onClick={() => handleTabClick("5")}>
          Thumbnail
        </li>
      </ul>
      <div className="tab-content px-2 py-5">
        <FormProvider {...methods}>
          <form
            onSubmit={e => e.preventDefault()}
            noValidate
            autoComplete="off">
            <div
              className={`grid gap-y-4 ${
                currentTab === "1" ? "visible" : "hidden"
              }`}>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6">
                  <Input
                    label="Title"
                    type="text"
                    id="title"
                    placeholder="Max length 70 charecters."
                    validation={{
                      required: {
                        value: true,
                        message: "required",
                      },
                      maxLength: {
                        value: 70,
                        message: "max 70 characters",
                      },
                    }}
                  />
                </div>
                <div className="col-span-6">
                  <Input
                    label="Slug"
                    type="text"
                    id="slug"
                    placeholder="Max length 70 charecters."
                    validation={{
                      required: {
                        value: true,
                        message: "required",
                      },
                      maxLength: {
                        value: 70,
                        message: "max 70 characters",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="col-auto">
                  <TextArea
                    label="Summary"
                    cols={30}
                    rows={5}
                    id="summary"
                    placeholder="Max length 210 charecters."
                    validation={{
                      required: {
                        value: true,
                        message: "required",
                      },
                      maxLength: {
                        value: 210,
                        message: "max 210 characters",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-6">
                  <Input
                    label="Meta Title"
                    type="text"
                    id="metatitle"
                    placeholder="Max length 70 charecters."
                    validation={{
                      required: {
                        value: true,
                        message: "required",
                      },
                      maxLength: {
                        value: 70,
                        message: "max 210 characters",
                      },
                    }}
                  />
                </div>
                <div className="col-span-6">
                  <Input
                    label="Meta Keyword"
                    type="text"
                    id="metakeyword"
                    placeholder="Max length 70 charecters."
                    validation={{
                      required: {
                        value: true,
                        message: "required",
                      },
                      maxLength: {
                        value: 70,
                        message: "max 70 characters",
                      },
                    }}
                  />
                </div>
                <div className="col-span-12">
                  <TextArea
                    label="Meta Description"
                    cols={30}
                    rows={5}
                    id="metadescription"
                    placeholder="Max length 210 charecters."
                    validation={{
                      required: {
                        value: true,
                        message: "required",
                      },
                      maxLength: {
                        value: 210,
                        message: "max 210 characters",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="col-span-1 max-w-md">
                  <Select
                    id="author"
                    label="Author"
                    options={["Admin1", "Admin2"]}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="col-span-1 max-w-md">
                  <Radio
                    registerName="status"
                    label="Status"
                    defaultValue="active"
                    options={statusRadio}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="col-span-1 max-w-md">
                  <Input
                    label="Publised At"
                    type="datetime-local"
                    id="publised_at"
                    placeholder="Max length 70 charecters."
                    validation={{
                      required: {
                        value: true,
                        message: "required",
                      },
                      maxLength: {
                        value: 70,
                        message: "max 70 characters",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="col-span-1 max-w-md">
                  <Radio
                    registerName="featured"
                    label="Featured"
                    defaultValue="yes"
                    options={featuredRadio}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="col-span-1 max-w-md">
                  <Radio
                    registerName="remove"
                    label="Remove"
                    defaultValue="yes"
                    options={removeRadio}
                  />
                </div>
              </div>
              <button className="max-w-sm border-2 p-2" onClick={onSubmit}>
                Submit
              </button>
            </div>
            <div className={`${currentTab === "2" ? "visible" : "hidden"}`}>
              <TextRich
                id="content"
                validation={{
                  required: {
                    value: true,
                    message: "The content can't be empty",
                  },
                }}
              />
            </div>
            <div className={`${currentTab === "3" ? "visible" : "hidden"}`}>
              <h1 className="font-bold">Relate Content</h1>
            </div>

            <div className={`${currentTab === "4" ? "visible" : "hidden"}`}>
              <h1 className="font-bold">Classification</h1>
            </div>
            <div className={`${currentTab === "5" ? "visible" : "hidden"}`}>
              <h1 className="font-bold">Thumbnail</h1>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
