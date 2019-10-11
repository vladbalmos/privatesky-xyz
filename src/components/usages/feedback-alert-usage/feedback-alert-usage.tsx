import { Component, h } from "@stencil/core";

@Component({
	tag: 'feedback-alert-usage',
	styleUrl: '../general-css/general-css.css',
	shadow: true,
})
export class FeedbackAlertUsage {
	render() {
		return (

			<div class="card">
				<h5 class="card-header">psk-feedback-alert</h5>
				<div class="card-body">

					<div class="card">
						<div class="card-body">
							<hr />
							<h5>HTML Tag:</h5>
							<pre class="text-center">
								<code class="language-html" data-lang="html">
									<span class="nt">&lt;psk-ui-feedback/&gt;</span>
								</code>
							</pre>
							<div class="card">
								<h5 class="card-header">Descripton</h5>
								<div class="card-body">
									<p>This component is intended to be used to show a response to the user when an action is done.</p>
									<p> By default, if no datasource is provided , the component will emit an (<code>succes-alert</code>) in order to show some response.</p>
									<p>When the <strong>X</strong> button is pressed an event(<code>closeFeedback</code>) is triggered and the Application Controller should listen to this, so the alert can be closed within the controller</p>
								</div>
							</div><br />

							<div class="card">
								<h5 class="card-header">Supported properties</h5>
								<div class="card-body">
									The supported properties depends on which type of feedback you are in need of:
                   					<div class="card">
										<h5 class="card-header">Success Feedback and Failure Feedback</h5>
										<div class="card-body">
											These 2 types of feedback need only the <code>message</code>(which needs <code>content</code> that will be shown on the user interface) and the <code>typeOfAlert</code> which should be either :<br />
											<strong>success-alert:</strong>
											<psk-ui-feedback
												opened='true'
												message={
													{ content: 'a success alert' }}
												type-of-alert='success-alert'
											/>
											<div class="card-footer">
												<pre class="text-center">
													<code class="language-html" data-lang="html">
														<span class="nt">&lt;psk-ui-feedback
														  message= &#123;&#123;content: 'a succes alert'&#125;&#125;
														  type-of-alert='success-alert'  &#125;&#125; /&gt;
                            							</span>
													</code>
												</pre>
											</div>
											or <strong>danger-alert:</strong>
											<psk-ui-feedback
												opened='true'
												message={
													{ content: 'a danger alert' }}
												type-of-alert='danger-alert'
											/>
											<div class="card-footer">
												<pre class="text-center">
													<code class="language-html" data-lang="html">
														<span class="nt">&lt;psk-ui-feedback
														  opened = 'true'
														  message= &#123;&#123;content: 'a danger alert'&#125;&#125;
														  type-of-alert='danger-alert'&#125;&#125; /&gt;
                        								</span>
													</code>
												</pre>
											</div>
										</div><br></br>
										<div class="card">
											<h5 class='card-header'>Toast Feedback</h5>
											<div class='card-body'>
												<p>This type of feedback is a little bit trickier because is made in order to work with <code><span class="nt">&lt;psk-list-feedbacks/&gt;</span></code></p>
												<p>Like the success and failure feedback this one needs the <code>message</code> and the <code>typeOfAlert</code></p>
												<p>The additions are the <code>timeSinceCreation</code> which is a number and <code>timeMeasure</code> which is either <strong>seconds</strong>,<strong>minutes</strong> or <strong>hours</strong>  </p>
												<p>When used with the pool <code><span class="nt">&lt;psk-list-feedbacks/&gt;</span></code> these two don't need to be send as options,but in the singularity case we need to send them(Eg: 20 seconds ago)</p>
												<div class="card-deck">
													<div class="card">
														<div class="card-body">
															<psk-ui-feedback
																opened='true'
																message={
																	{ content: 'a toast alert' }}
																type-of-alert='toast'
																timeSinceCreation='20'
																timeMeasure='seconds'
															/>
															<div class="card-footer">
																<pre class="text-center">
																	<code class="language-html" data-lang="html">
																		<span class="nt">&lt;psk-ui-feedback
																		  message= &#123;&#123;content: 'a toast alert'&#125;&#125;
																		  type-of-alert='toast'
																		  timeSinceCreation='20'
																		  timeMeasure='seconds'&#125;&#125; /&gt;
                                    									</span>
																	</code>
																</pre>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr />
						</div>
					</div>
				</div>
			</div>
		)
	}
}