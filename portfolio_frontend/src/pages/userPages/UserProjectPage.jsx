import React, { useEffect, useState } from "react";
import StuffHeader from "../../Components/userAddstuffs/StuffHeader";
import { useNavigate, useParams } from "react-router-dom";
import ViewProjectCommentsCard from "../../Components/userProjects/ViewProjectCommentsCard";
import { getProjectByIdAndPid, addLike } from "../../api/projectApi";
import { addComment, getComment } from "../../api/projectCommentApi";

function UserProjectPage() {
  const { uid, pid } = useParams();
  const navigate = useNavigate();

  // project details
  const [projectState, setProjectState] = useState(false);
  const [data, setData] = useState({});
  const [like, setLike] = useState(0);

  // project comment
  const [comment_description, setProjectDescription] = useState("");
  const [commentState, setCommentState] = useState(false);
  const [submitCommentState, setSubmitCommentState] = useState(false);
  const [commentData, setCommentData] = useState([]);

  // fetch project details
  useEffect(() => {
    (async () => {
      const result = await getProjectByIdAndPid({ uid, pid });
      const data = result.data;
      if (data != null && data.success) {
        setData(data.data);
        setProjectState(true);
        setLike(parseInt(data.data.like));
        console.log(data.data);
      } else {
        alert("Some error occured");
        localStorage.clear();
        navigate("/");
      }
    })();
  }, []);

  // fetch project comment details
  useEffect(() => {
    (async () => {
      const result = await getComment(pid);
      const data = result.data;
      if (data != null && data.success) {
        setCommentData(data.data);
        setCommentState(true);
        console.log(data.data);
      } else {
        alert("Some error occured")
        localStorage.clear();
        navigate("/");
      }
    })();
  }, [submitCommentState]);

  // submit comment form
  async function sumbitComment() {
    const result = await addComment({ pid, comment_description });
    const data = result.data;
    if (data != null && data.success) {
      console.log(data);
      setProjectDescription("");
      setSubmitCommentState(!submitCommentState);
    } else {
      console.log(result);
    }
  }

  // add like
  async function addProjectLike() {
    setLike(like + 1);
    await addLike(pid);
  }

  return (
    <>
      {/* NOTE Need to change rendering method (state code) do it later */}
      <div class="row" style={{ width: "70%" }}>
        <div class="col-lg-12">
          <div class="card pl-5">
            <div class="card-body">
              <StuffHeader title={"View Project"} url={""} />
              {/* body */}
              <div className="mt-4">
                <div className="view-project-header">
                  <div className="project-left-side">
                    <h5>{data.project_name}</h5>
                    <span className="font-size-12">
                      <b>Tagline</b> - {data.tagline}
                    </span>
                    <div className="font-size-12">
                      <b>Project Domain : </b> {data.project_domain}
                    </div>
                  </div>
                  <div className="project-right-side">
                    <div className="mb-3">Author : <b>{data.u_name}</b></div>
                    <div className="upvote-button" onClick={addProjectLike}>
                      <div className="upvote-button-leftside">Upvote</div>
                      <div className="upvote-button-rightside">{like}</div>
                    </div>

                    {/* open project */}
                    <div className="flex">
                      <div className="mt-2 pointer">
                        <span
                          className="mr-3"
                          onClick={() => {
                            window.location.href = data.project_url;
                          }}
                        >
                          <i class="bx bxs-folder-open"></i>{" "}
                          <span className="font-size-12">Open</span>
                        </span>
                        <span
                          onClick={() => {
                            window.location.href = data.github_repo;
                          }}
                        >
                          <i class="bx bxs-folder-open"></i> Github
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="my-5 flex center">
                  <img
                    src={data.image}
                    alt="Image here"
                    style={{ height: "30vh", width: "30vh" }}
                    class="img-thumbnail d-block"
                  />
                </div>

                {/* description */}
                <div className="mt-5">
                  <h5>Description</h5>
                </div>
                <div>{data.description}</div>
                {/* Post comment */}
                <div className="bar mt-5 mb-4"></div>
                <div>
                  <div className="mb-3">
                    <div class="flex">
                      <div class="mr-10" style={{ width: "100%" }}>
                        <input
                          type="text"
                          value={comment_description}
                          onChange={(e) =>
                            setProjectDescription(e.target.value)
                          }
                          class="form-control input-border project-comment radius-50"
                          id="formrow-email-input"
                          placeholder="Post your comment"
                        />
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={sumbitComment}
                          class="btn color-light-green radius-50 waves-effect waves-light"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div class="mt-5">
                  <h5 class="font-size-15">
                    <i class="bx bx-message-dots text-muted align-middle me-1"></i>{" "}
                    Comments :
                  </h5>
                  {/* Comments body */}
                  {commentState
                    ? commentData.map((result, index) => {
                        return (
                          <ViewProjectCommentsCard
                            key={index}
                            u_name={result.u_name}
                            comment_description={result.comment_description}
                          />
                        );
                      })
                    : ""}
                  {commentData.length == 0 ? "No Comments to Show" : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProjectPage;
